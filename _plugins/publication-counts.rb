module Jekyll
  class PublicationCountsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      bib_path = File.join(site.source, "_bibliography", "papers.bib")
      return unless File.exist?(bib_path)

      content = File.read(bib_path)
      entry_re = /^\s*@(?!comment\b|string\b|preamble\b)[A-Za-z]+\s*\{/i
      total = content.scan(entry_re).size
      selected = content.scan(/selected\s*=\s*\{?\s*true/i).size

      site.config["publications_total"] = total
      site.config["publications_selected_total"] = selected
    end
  end
end
